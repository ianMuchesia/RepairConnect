import { handshake, idea, timetable } from '../../assets'
import './home.css'


const servicesData = [
    {
        title: "Connecting",
        description: "Connect customers with reliable and professional repairmen or repair shops in their area for electronic device repairs",
        img:handshake,

    }, {
        title: "Scheduling",
        description: "Provide a platform for customers to easily schedule repairs and receive real-time updates on their repair status",
        img:timetable,

    },
    {
        title: "Tips and Resources",
        description: "Provide customers with tips and resources for maintaining and repairing their electronic devices at home, helping them save money and reduce e-waste. ",
        img:idea,

    }
]

const HomeService = () => {
  return (
    <div className="homeServiceSection">
        <h3>What we do</h3>
        <div className="serviceSectionContainer">
            {servicesData.map((item, index)=>(
                <div key={index} className="homeServiceCard">
                    <img src={item.img} alt={item.img} className='img' />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <button className="homeServiceBtn"> VISIT SHOPS</button>
            </div>
            ))}
        </div>
    </div>
  )
}

export default HomeService