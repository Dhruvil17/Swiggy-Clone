import * as Yup from "yup";
import { Formik } from "formik";

// Creating schema
const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Formik
                validationSchema={schema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values));
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <div className="w-full max-w-xs">
                        <div className="bg-white rounded-lg shadow-lg p-10">
                            <form
                                noValidate
                                onSubmit={handleSubmit}
                                className="space-y-6">
                                <span className="text-4xl text-indigo-600 mb-6 block">
                                    Login
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter email id"
                                    className="w-full px-3 py-2 bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-200"
                                />
                                <p className="text-red-500 text-xs italic">
                                    {errors.email &&
                                        touched.email &&
                                        errors.email}
                                </p>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="w-full px-3 py-2 bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-200"
                                />
                                <p className="text-red-500 text-xs italic">
                                    {errors.password &&
                                        touched.password &&
                                        errors.password}
                                </p>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition-all">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default Login;
