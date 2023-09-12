import Tag from './Tag'

export default function InfoLogement({flatInfos}) {

    const rating = parseInt(flatInfos.flatRating, 10);
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('star--active');
        }
    })

  return (
    <div>
        <div className="infoLogement">
            <div className="infoLogement__title">
                <h1>{flatInfos.flatTitle}</h1>
                <p>{flatInfos.flatLocation}</p>
                <div className="infoLogement_tags d-flex gap-3">
               {flatInfos && flatInfos.flatTags && Array.isArray(flatInfos.flatTags) && flatInfos.flatTags.map((tag, index) => (
                    <Tag key={index} tagName={tag} />
                ))}
                </div>
            </div>
            <div className="infoLogement__details">
                <div className="infoLogement__details__profile">
                    <p>{flatInfos.flatHost.name}</p>
                    <img className="rounded-circle" src={flatInfos.flatHost.picture} alt="Profile" />
                </div>
                <div className="infoLogement__details__rating">
                    <i className="fa-solid fa-star star"></i>
                    <i className="fa-solid fa-star star"></i>
                    <i className="fa-solid fa-star star"></i>
                    <i className="fa-solid fa-star star"></i>
                    <i className="fa-solid fa-star star"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
