import './styles.css'

function Places() {
  return (
    <div className='map'>
      <iframe
        src='https://www.google.com/maps/d/embed?mid=1GwJLuqjzACK2F2KCEqlDDw-_sIrMDH8&hl=ru&ehbc=2E312F'
        width='640'
        height='480'
      ></iframe>
    </div>
  )
}

export default Places
