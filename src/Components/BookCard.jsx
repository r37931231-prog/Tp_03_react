export default function BookCard({titre,auteur,estDisponible,onClickEmprunt}){
    return(
        <div style={{border:'3px solid grey',borderRadius:'10px',padding:'20px',margin:'10px',width:'300px'}}>
            <h2>Titre: {titre}</h2>
            <p>Auteur: {auteur}</p>
            <p>Statut: {estDisponible ? "🟢 Disponible":"🔴 Emprunté"}</p>
            <button style={{padding:'10px',borderRadius:'5px',border:'1px solid grey',marginTop:'2px',backgroundColor:estDisponible ?  "#16a34a" : "#dc2626"}} 
            onClick={onClickEmprunt}
            >{estDisponible? "Emprunter":"Rendre"}</button>

        </div>
    )
}