import { contact, resumeUrl } from '../data'
import { ContactRow } from './Links'

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-hair">
      <div className="mx-auto flex max-w-shell flex-col gap-3 px-6 py-10">
        <p className="text-label uppercase text-muted">Get in touch</p>
        <ContactRow contact={contact} resumeUrl={resumeUrl} />
      </div>
    </footer>
  )
}
