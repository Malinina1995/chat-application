import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Input, Textarea} from "../../../../FormControls/FormControls";
import {reduxForm} from "redux-form";
import {required} from "../../../../utils/validators/validators";
import './ProfileDataForm.css';
import {ContactsType, ProfileType} from "../../../../types";

type ProfileDataFormPropsType = {
    initialValues: ProfileType;
}

//initialsValue cannot be renamed

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType,
    ProfileDataFormPropsType> & ProfileDataFormPropsType> = ({handleSubmit, initialValues, error}) => {
    const contacts = initialValues.contacts ?? ({} as ContactsType);
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <span className="profile_info-title">Full name: </span>
                <Field
                    component={Input}
                    type="text"
                    name="fullName"
                    validate={[required]}
                />
            </div>
            <div>
                <span className="profile_info-title">About me: </span>
                <Field
                    component={Input}
                    type="text"
                    name="aboutMe"
                    validate={[required]}
                />
            </div>
            <div className='profile_info-checkbox'>
                <span className="profile_info-title profile_info-checkbox-title">Looking for a job: </span>
                <Field
                    component={Input}
                    style={{flexBasis:'10%'}}
                    type="checkbox"
                    name="lookingForAJob"
                />
            </div>
            <div>
                <span className="profile_info-title">My professional skills: </span>
                <Field
                    component={Textarea}
                    type="text"
                    name="lookingForAJobDescription"
                    validate={[required]}
                />
            </div>
            <div className="profile_info-title">Contacts:</div>
            {Object.keys(contacts).map(key => {
                return (
                    <Contacts
                        key={key}
                        contactsTitle={key}
                        contactsValue={contacts[key]}
                    />
                );
            })}
            <div className='someError'>{error}</div>
            <div>
                <button className="btn btn-primary">save</button>
            </div>
        </form>
    );
};

type ContactsPropsType = {
    contactsTitle: string;
    contactsValue: string | null | undefined;
}

const Contacts: React.FC<ContactsPropsType> = ({contactsTitle, contactsValue}) => {
    return (
        <div>
            <span className="profile_info-title contacts">{contactsTitle}: </span>
            <Field component={Input} type="text" name={`contacts.${contactsValue}`}/>
        </div>
    );
};

export const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormPropsType>({
    form: "edit-profile"
})(ProfileDataForm);
