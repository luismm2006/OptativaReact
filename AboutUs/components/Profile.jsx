import "./Profile.css";
export default function Profile({url, name, email, bio, skills}){
    return(
        <div className="card">
            <img src={url}/>
            <div>
                <div className="info">
                    <h1>{name}</h1>
                    <h2>{email}</h2>
                    <p>{bio}</p>
                </div>
                <div className="skills">
                    {skills.map((ele, index) => (
                        <div className="skill" key={index}>{ele}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}