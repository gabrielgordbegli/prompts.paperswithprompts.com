import styles from './page.module.css'

export default function Home() {


  function generateThumbnails() {
    function generateImageFileNames() {
      const imageFileNames = [];
      for (let i = 0; i <= 26; i++) {
        imageFileNames.push(`${i}.png`);
      }
      return imageFileNames;
    }
    const imageFileNames = generateImageFileNames();
    return imageFileNames.map((fileName, index) => {
      return (
        <>
          <img key={index} className={styles['thumbnail']} key={fileName} alt='prompt image' src={`/images/${fileName}`} />
        </>
      )
    });
  }

  const thumbNails = generateThumbnails();

  return (
    <>
      <div className={styles['flex']}>
        {
          thumbNails.map((thumbnail, index) => {
            return (
              <>
                {thumbnail}
              </>
            )
          })
        }
      </div>
    </>

  )
}
