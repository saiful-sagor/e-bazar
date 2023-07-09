import React from "react";

const SuccessMessage = () => {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
            <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl ">
                            <p className="text-green-500">Order Successfully Placed!</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>Continue Shopping...</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SuccessMessage;
