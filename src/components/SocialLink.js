import { socialLinks } from './../data'

const SocialLink = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((social) => {
        return (
          <li key={social.id}>
            <a
              href={social.href}
              rel="noreferrer"
              target="_blank"
              className={itemClass}
            >
              <i className={social.icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default SocialLink
