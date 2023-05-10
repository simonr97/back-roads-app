import Title from './Title'
import { services } from './../data'
import Service from './Service'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title firstPart="our" secondPart="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { icon, title, text } = service
          return <Service icon={icon} title={title} text={text} />
        })}
      </div>
    </section>
  )
}
export default Services
