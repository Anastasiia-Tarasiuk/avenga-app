import {FormInput} from "../FormInput";
import {ButtonComponent} from "../Button";
import {CancelButton} from "../ModalOverlay/ModalOverlay.styled";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editUser} from "../../redux/slice/userSlice";
import Notiflix from "notiflix";
import {ModalTitle} from "../EditVideoModalContent/EditVideoModalContent.styled";

export const RenameUserModalContent = ({close}) => {
    const dispatch = useDispatch();
    const [newName, setNewName] = useState('');

    function handleRenameButtonClick() {
        if (newName !== '' ) {
            dispatch(editUser(newName));
            close();
            Notiflix.Notify.success('User was renamed');
        } else {
            Notiflix.Notify.warning('Enter new name' );
        }
    }

    function handleCancelButtonClick() {
        close();
    }

    return <>
        <ModalTitle>{"Do you want to rename user?"}</ModalTitle>
        <FormInput labelText="Enter new name" inputType="text" inputName="videoName" onChange={value => setNewName(value)} />
        <div>
            <ButtonComponent className="rename" type="button" text="Rename" onClick={handleRenameButtonClick}/>
            <CancelButton className="cancel" type="button" text="Cancel" onClick={handleCancelButtonClick}/>
        </div>
    </>
}