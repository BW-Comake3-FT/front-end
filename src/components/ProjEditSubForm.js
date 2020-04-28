import React from 'react';
import {useForm} from 'react-hook-form';

const ProjEditSubForm = props => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = () => {
    }

    return(
        <div>

            <h1>Edit Form:</h1>

            <div>
                <form onSubmit>
                    <label htmlFor="title">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                        />
                    </label>

                    <label ftmlFor="description">
                        <input
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Description"
                        />
                    </label>

                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProjEditSubForm