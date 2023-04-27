import {FaQuoteLeft} from 'react-icons/fa'


const testimonialData = [
    {
        name: "Shirleen Shay",
        dept:"Artisan and Fashion Designer",
        testimonial:"I was impressed with RepairConnect's platform for scheduling repairs and tracking the progress of my repair. It was so much easier than dealing with a traditional repair shop. Thanks for the great service!",
    },
    {
        name: "Able Mwakio",
        dept:"Linguistics Manager KAA",
        testimonial:"I had a great experience with RepairConnect! The process was simple and fast, and I was connected with a reliable technician in my area who fixed my device in no time. I highly recommend this service!",
    },
    {
        name: "Baraka Mchovu",
        dept:"Blogger",
        testimonial:"RepairConnect helped me save money by providing resources for repairing my own device at home. The instructional videos and guides were clear and easy to follow. I appreciate the focus on reducing e-waste and promoting sustainable repair practices.",
    },

]

const Testimonial = () => {
  return (
 <div className="testimonialSection">
    <h3>Testimonials</h3>
    <div className="testimonialsContainer">
        {testimonialData.map((item, index)=>(
            <div key={index} className="testimonialsCard">
            <div className="testimonialsUpper">

           
            <div className="testimonialDetails">
            <h5 className='nameTestimonial'>{item.name}</h5>
            <h5 className='deptTestimonial'>{item.dept}</h5>
            </div>
            <FaQuoteLeft className="quote-icon"/>
            </div>
            <div className="testimonial">
                <p>{item.testimonial}</p>
            </div>
        </div>
        ))}
    </div>
 </div>
  )
}

export default Testimonial