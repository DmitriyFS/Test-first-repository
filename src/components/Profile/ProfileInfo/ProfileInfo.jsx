import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return <div>
    <div>
      <img src='https://aviabiletyi.ru/wp-content/uploads/2018/12/%D0%90%D0%B2%D0%B8%D0%B0%D0%B1%D0%B8%D0%BB%D0%B5%D1%82%D1%8B-%D0%B2-%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA.png' alt='' />
    </div>
    <div className={s.descriptionBlock}>
      ava-disk
    </div>
  </div>
}

export default ProfileInfo;