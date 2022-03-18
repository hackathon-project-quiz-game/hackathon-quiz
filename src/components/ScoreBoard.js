


function ScoreBoard(props) {
    return (
        <div className="board flex justify-center">
            <div className="flex bg-gray-600 w-4/6 justify-between m-8  font-bold rounded border-4 border-slate-300 px-2">
                <div className="px-7 flex flex-col justify-center items-center m-3  bg-gray-100  w-20 rounded-md">
                    <div><span className="text-sky-600">question</span></div>
                    <div className="mx-7"><span className="text-4xl text-gray-700">5/10</span></div>
                </div>
               
                <div className="px-7 flex flex-col justify-center items-center m-3  bg-yellow-400  w-20 rounded-md" >
                    <div><span className="text-sky-600">points</span></div>
                    <div><span className="text-5xl text-gray-700" >5</span></div>
                </div>
            </div>
        </div>

    );
}

export default ScoreBoard;