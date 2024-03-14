import React from "react";


const JobList = ({jobs}) => {
    const truncate = (text) => {
        return text.length > 70 ? `${text.substring(0, 70)}...` : text;
    }

    const renderedJobs = jobs.map((job) => {
        return (
            <div className="main-content" key={job.id}>
                <div className="left-part">

                    <div className="job-title">
                        <h2><a href="{}">{job.job_title}</a></h2>
                    </div>
                    <div className="comany-location-wrapper">
                        <div className="company-name">
                            <p><i className="fa-solid fa-bag-shopping"></i>{job.company_name}</p>
                        </div>
                        <div className="location">
                            <p><i className="fa-solid fa-location-dot"></i>{job.post_code},
                                {job.location}</p>
                        </div>
                    </div>
                    <div className="salary">

                        <p><i className="fa-solid fa-money-bill"></i>{job.pay_rate}</p>
                    </div>
                    <div className="desc">
                        <p><span dangerouslySetInnerHTML={{ __html: truncate(job.job_description) }}></span><a href="{}}">more</a></p>
                    </div>
                    <div className="time">
                        <p> <span className="feature">{job.change_created_at} ago</span></p>
                    </div>
                </div>
                <div className="right-part">
                    <div className="logo-image">
                        <img src={job.company_logo} alt="" />
                    </div>
                    <div className="stated">
                        <i className="fa-regular fa-star fa-2x"></i>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            {renderedJobs}
        </div>
    )
}

export default JobList