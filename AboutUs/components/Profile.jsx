import "./Profile.css";
export default function Profile({url, name, email, bio, skills, isPremium}){
    return(
        <div className="card">
            <img src= {url ? url : "data:image/png;base64,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"}/>
            <div className="data">
                <div className="info">
                    <h1>{name}</h1>
                    <h2>{email}</h2>
                    <p>{bio ? bio : "Este usuario no ha añadido bio aún"}</p>
                </div>
                <div className="skills">
                    {skills ? skills.map((ele, index) => (
                        <div className="skill" key={index}>{ele}</div>
                    )): ""}
                </div>
                <div>
                    {isPremium ? "El usuario es Premium" : ""}
                </div>
            </div>
        </div>
    );
}