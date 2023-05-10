import Title from './Title'
import { tours } from './../data'
import Tour from './Tour'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title firstPart="featured" secondPart="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { date, title, info, location, duration, cost, image } = tour
          return (
            <Tour
              image={image}
              date={date}
              title={title}
              info={info}
              location={location}
              duration={duration}
              cost={cost}
            />
          )
        })}
      </div>
    </section>
  )
}
export default Tours
