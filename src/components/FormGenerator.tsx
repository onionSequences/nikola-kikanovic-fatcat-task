import { ReactNode } from 'react';
import { useForm, FieldErrors, Control, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useMutation } from '@tanstack/react-query';

type FormGeneratorProps<T extends FieldValues> = {
    renderForm: ({
        control,
        errors,
    }: {
        control: Control<T>;
        errors: FieldErrors<T>;
    }) => ReactNode;
    validationSchema: z.ZodSchema<T>;
    apiEndpoint: string;
    successMessage: string;
};

const FormGenerator = <T extends FieldValues>({
    renderForm,
    validationSchema,
    apiEndpoint,
    successMessage,
}: FormGeneratorProps<T>) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(validationSchema),
    });

    const mutation = useMutation({
        mutationFn: async (formData: T) => {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        },
        onSuccess: () => {
            // TODO Handle onSuccess
        },
        onError: () => {
            // TODO Handle onError
        },
    });

    const onSubmit = (data: T) => {
        mutation.mutate(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md"
        >
            {renderForm({ control, errors })}
            <button
                type="submit"
                disabled={mutation.isPending}
                className="mt-4 w-full bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
                {mutation.isPending ? 'Submitting...' : 'Submit'}
            </button>
            {mutation.isError && (
                <p className="mt-2 text-mainRed">Error submitting form</p>
            )}
            {mutation.isSuccess ? (
                <p className="mt-2 text-mainGreen">{successMessage}</p>
            ) : null}
        </form>
    );
};

export default FormGenerator;
