import React, { useState } from 'react';
import Loading from './Loading';
import RepoModal from './RepoModal';

const Users = ({ data, repositories }) => {

    const [showModal, setShowModal] = useState(false)
    const CloseModal = () => setShowModal(false)

    return (
        <>
            {
                !data?.name ?
                    <h1 className=' grid items-center justify-center font-bold text-lg'>Please Provide a Valid Name.</h1>
                    :
                    <Loading></Loading> &&
                    <div class='grid items-center justify-center mt-20'>
                        <div class="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-sm rounded-xl">
                            <div class="pb-6">
                                <div class="flex flex-wrap justify-center">
                                    <div class="flex justify-center w-full">
                                        <div class="relative">
                                            <img alt={data.avatar_url} src={data.avatar_url} class="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]" />
                                        </div>
                                    </div>
                                </div>
                                <div class=" mt-20 text-center">
                                    <h3 class="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">{data?.name}</h3>
                                    <div class="flex flex-row justify-center w-full mx-auto space-x-2 text-center">


                                        <div class=" font-semibold tracking-wide text-gray-600 dark:text-gray-300 font-mono text-base">Created-at : {data?.created_at}</div>

                                    </div>

                                </div>
                                <div class="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                                    <div class="flex flex-wrap justify-center">
                                        <div class="w-full px-6">
                                            <p class="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                                                {data.bio}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setShowModal(true)} className="mt-3  grid mx-auto w-auto rounded-lg bg-amber-200/90 py-3 px-5 text-xs lg:text-sm font-semibold text-black shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105  focus:scale-105  focus:ring-2">Repositoris</button>
                                <div class="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
                                    <div class="absolute flex -space-x-12 rounded-b-2xl">
                                        <div class="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-amber-400/90 group-hover:bg-amber-600/90 z-10"></div>
                                        <div class="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-amber-300/90 group-hover:bg-amber-500/90 z-20"></div>
                                        <div class="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-amber-200/90 group-hover:bg-amber-400/90 z-30"></div>
                                        <div class="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-amber-100/90 group-hover:bg-amber-300/90 z-40"></div>
                                        <div class="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-amber-50/90 group-hover:bg-amber-200/90 z-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' grid mx-auto'>
                            <RepoModal onClose={CloseModal} data={repositories} visibel={showModal} ></RepoModal>
                        </div>
                    </div>

            }

        </>


    );
};

export default Users;