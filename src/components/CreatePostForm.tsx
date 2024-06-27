import { Control, Controller, FieldErrors } from 'react-hook-form';
import FormGenerator from './FormGenerator';
import { z } from 'zod';

type FormDataType = {
    title: string;
    body: string;
};

const validationSchema = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(50, 'Title cannot exceed 50 characters'),
    body: z
        .string()
        .min(1, 'Body is required')
        .max(200, 'Body cannot exceed 200 characters'),
});

const CreatePostForm = () => {
    const renderForm = ({
        control,
        errors,
    }: {
        control: Control<FormDataType>;
        errors: FieldErrors<FormDataType>;
    }) => (
        <>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700">
                    Title
                </label>
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            id="title"
                            type="text"
                            placeholder="Enter title"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    )}
                />
                {errors.title && (
                    <p className="mt-1 text-mainRed">{errors.title.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="body" className="block text-gray-700">
                    Body
                </label>
                <Controller
                    name="body"
                    control={control}
                    render={({ field }) => (
                        <textarea
                            {...field}
                            id="body"
                            placeholder="Enter body"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    )}
                />
                {errors.body && (
                    <p className="mt-1 text-mainRed">{errors.body.message}</p>
                )}
            </div>
        </>
    );

    return (
        <FormGenerator
            successMessage="Successfully created post"
            renderForm={renderForm}
            validationSchema={validationSchema}
            apiEndpoint="https://jsonplaceholder.typicode.com/posts"
        />
    );
};

export default CreatePostForm;
