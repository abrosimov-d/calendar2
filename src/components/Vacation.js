export default function Vacation(props) {

    return (
        <div className="vacation">
            <div class="line">
                <input className="vacation-input" 
                placeholder="01.06.2024:14;01.11.2024:14;" 
                value={props.vacations}
                onChange={props.onVacationChange}/>
            <button onClick={props.onVacationOkClick}>OK</button>
            </div>
        </div>
    )
}