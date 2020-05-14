import React from "react";
import {Field} from "redux-form";
import {Input, Textarea} from "../../../../FormControls/FormControls";
import {reduxForm} from "redux-form";
import {required} from "../../../../utils/validators/validators";
import './ProfileDataForm.css';

const ProfileDataForm = ({handleSubmit, initialValues, error}) => {
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
            {Object.keys(initialValues.contacts).map(key => {
                return (
                    <Contacts
                        key={key}
                        contactsTitle={key}
                        contactsValue={initialValues.contacts[key]}
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

const Contacts = ({contactsTitle, contactsValue}) => {
    return (
        <div>
            <span className="profile_info-title contacts">{contactsTitle}: </span>
            <Field component={Input} type="text" name={`contacts.${contactsValue}`}/>
        </div>
    );
};

export const ProfileDataFormReduxForm = reduxForm({
    form: "edit-profile"
})(ProfileDataForm);
