import React, { useState } from 'react'
import { useToasts } from 'react-toast-notifications';
import { useForm } from "react-hook-form";

import Grid from '@mui/material/Grid'
import { CustomTextField, SaveButton } from '../../subcomponents/StyledComponents'
import { updatePassword } from '../../CustomerService';

type passwordProps = {
    email: string
}

const ChangePassword = (props: passwordProps) => {
    const { addToast } = useToasts();

    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");

    const email = props.email;

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        mode: "onTouched"
    })

    const submitUpdatedPassword = () => {
        const oldPassword = password;
        updatePassword({ email, oldPassword, newPassword })
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                    setError(data.error)
                    addToast(data.error, { appearance: 'error' });
                } else {
                    console.log(data)
                    setPassword("")
                    setNewPassword("")
                    setRepeatPassword("")
                    addToast('Password updated successfully!', { appearance: 'success' });
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitUpdatedPassword)}>
                <Grid container spacing={2} pb={2}>
                    <Grid item lg={12}>
                        <p>old Password</p>
                        <CustomTextField
                            sx={{ width: '315px' }}
                            placeholder='Current Password'
                            id="current-password"
                            variant="outlined"
                            type='password'
                            value={password}
                            {...register("password",
                                {
                                    required: "Password is required."
                                }
                            )}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setPassword(event.target.value)
                            }}
                        />
                        {errors.password && <p className='error'>{errors.password.message}</p>}
                    </Grid>
                    <Grid item lg={12}>
                        <p>New password</p>
                        <CustomTextField
                            sx={{ width: '315px' }}
                            placeholder='password'
                            id="new-password"
                            variant="outlined"
                            type='password'
                            value={newPassword}
                            {...register("newPassword",
                                {
                                    required: "New Password is required."
                                }
                            )}

                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setNewPassword(event.target.value)
                            }}
                        />
                        {errors.newPassword && <p className='error'>{errors.newPassword.message}</p>}
                    </Grid>

                    <Grid item lg={12}>
                        <p>Repeat password</p>
                        <CustomTextField
                            sx={{ width: '315px' }}
                            placeholder='Repeat Password'
                            id="repeat-password"
                            variant="outlined"
                            type='password'
                            value={repeatPassword}
                            {...register("repeatPassword",
                                {
                                    required: "Repeat Password is required.",
                                    validate: (value) => value === watch('newPassword') || "Passwords don't match"
                                }
                            )}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setRepeatPassword(event.target.value)
                            }} />
                        {errors.repeatPassword && <p className='error'>{errors.repeatPassword.message}</p>}
                    </Grid>
                </Grid>
                <SaveButton type='submit'>Save</SaveButton>
            </form>
        </div>
    )
}

export default ChangePassword