import { useState } from 'react';
import BookCard from './Components/BookCard'

function App() {

   const [books, setBooks] = useState([
    {id:1, titre:"Le petit prince", auteur:"Bachir Fall", estDisponible:true},
    {id:2, titre:"L'étranger", auteur:"Maimouna Baldé", estDisponible:true},
    {id:3, titre:"Les misérables", auteur:"Hadiatou Bah", estDisponible:false},
    {id:4, titre:"Bel-Ami", auteur:"Fatima Diouf", estDisponible:true},
    {id:5, titre:"La peste", auteur:"Mariam Sarr", estDisponible:false}
]);

const [titre, setTitre] = useState("");
const [auteur, setAuteur] = useState("");

const onClickEmprunt = (bookId) => {
    setBooks(
        books.map((livre) =>
            livre.id === bookId
                ? { ...livre, estDisponible: !livre.estDisponible }
                : livre
        )
    );
};

const ajouterLivre = (e) => {
    e.preventDefault();

    if (titre.trim() === "" || auteur.trim() === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    const nouveauLivre = {
        id: Date.now(),
        titre: titre,
        auteur: auteur,
        estDisponible: true
    };

    setBooks([...books, nouveauLivre]);

    setTitre("");
    setAuteur("");
};

  return (
     <div style={{padding:'10px'}}>
           <h1>
                Nombre de livres disponibles : {
                    books.filter((livre) => livre.estDisponible).length
                }
            </h1>

            <h2>Ajouter un livre</h2>
            <form onSubmit={ajouterLivre}>
                <input
                    type="text"
                    placeholder="Titre du livre"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Nom de l'auteur"
                    value={auteur}
                    onChange={(e) => setAuteur(e.target.value)}
                />

                <button type="submit">Ajouter</button>
            </form>

           <h2>Liste des livres:</h2>

    <div style={{display:'flex', gap:'10px', flexWrap:'wrap',borderRadius:'10px',justifyContent:'center',backgroundColor:'beige'}}>
        {books.map((b) => (
            <BookCard
                key={b.id}
                titre={b.titre}
                auteur={b.auteur}
                estDisponible={b.estDisponible}
                onClickEmprunt={() => onClickEmprunt(b.id)}
            />
        ))}
    </div>
</div>
  )
}

export default App
