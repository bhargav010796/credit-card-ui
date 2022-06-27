import CreditCardFormComponent from "./CreditCardFormComponent"

const AddCreditCardComponent = (props) => {

    const savedDataHAndlar = (enteredCreditCard) =>{
        props.onAddCreditCardEntered(enteredCreditCard)
    }

    return (
        <div className="new-expense">
        <CreditCardFormComponent onSaveDataAdded={savedDataHAndlar}/>
        </div>

    )
}

export default AddCreditCardComponent