export default function ProfileCard({name, bio, themeColor, showBadges}){

    
        return(
            <>
                <div style={{backgroundColor: themeColor}}>
                    <div>
                        Nombre : {name ? name : "Nombre de usuario"}
                    </div>
                    <div>
                        Bio: {bio}
                    </div>
                    <div>
                        {showBadges ? "Medalla" : "Sin Medalla"}
                    </div>
                </div>
            </>
        );
    }