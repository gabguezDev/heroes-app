import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialValues: T) => {
	const [formState, setFormState] = useState(initialValues);

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const name = event.target.name;
		setFormState({ ...formState, [name]: value });
	};

	const onResetForm = () => {
		setFormState(initialValues);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
};
