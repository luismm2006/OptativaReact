export default function Leaderboard(){
    const jugadores = [{
        id:1,
        name: "Alice",
        score: 150
    }];
    return(
        <>
            {jugadores.map((j, index)=>{
                return(
                    <table key={index}>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>score</td>
                        </tr>
                        <tr>
                            <td>{j.id}</td>
                            <td>{j.name}</td>
                            <td>{j.score}</td>
                        </tr>
                    </table>
                );
                
            })}
        </>
    );
}