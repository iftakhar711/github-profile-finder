import React from 'react';
import { GiCrossMark } from 'react-icons/gi';
import { GoRepo } from 'react-icons/go';


const RepoModal = ({ onClose, data, visibel }) => {
    if (!visibel) return null
    return (
        <div className=" z-10 relative inset-0 bg-white bg-opacity-25 backdrop-blur-sm  items-center justify-center">
            <div className="bg-white rounded w-[500px] h-auto p-10">
                <GiCrossMark onClick={onClose} className='mb-3 w-5 h-5'></GiCrossMark>
                {data?.map(repo => (


                    // <div className="ui relaxed divided list" key={repo.name}>
                    //     <div className="item">
                    //         <i className="large github middle aligned icon"></i>
                    //         <div className="content">
                    //             <a href={repo.html_url} className="header">
                    //                 {repo.name}
                    //             </a>
                    //         </div>
                    //     </div>
                    // </div>

                    <div>
                        <div class="flex">
                            <div class="bg-blue-500 w-auto text-center p-2">
                                <div class="flex justify-center h-auto items-center">
                                    <GoRepo></GoRepo>
                                </div>
                            </div>
                            <div class="bg-white border-r-4 border-blue-400 w-full p-4">
                                <div>
                                    <a href={repo.html_url} className="header">
                                        {repo.name}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RepoModal;