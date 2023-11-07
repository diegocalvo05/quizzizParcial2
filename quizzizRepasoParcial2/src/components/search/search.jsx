import difficulty from "../../difficulty.json"
import { getQuestionBank } from "../../services/trivia.services";

export default function Search({ getOpt=()=>{} }){

    const handlerSubmit = (e)=>{
        e.preventDefault();

        const opt = e.target[0].value;

        console.log(opt);

        const trivia = getQuestionBank(opt);

        /* console.log(trivia); */

        getOpt(trivia);
    }


    return(
        <section>
            <form className="flex flex-row justify-center items-center bg-cyan-600 rounded-lg shadow-lg p-4 gap-8 " onSubmit={handlerSubmit}>
                <select>
                    <option value={""}/>
                    {
                        difficulty.map((r)=>{
                            return(
                                <option key={r.id} value={r.difficulty}>
                                    {r.difficulty}
                                </option>
                            );
                        })
                    }
                </select>
                <button type="submit" className="bg-gray-400 rounded-lg p-1 text-center"> Submit </button>
            </form>
        </section>
    );

}