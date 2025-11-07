import loadingSTyles from './loading.module.css'
const loadingState = () => {
  return (
      <p className={loadingSTyles.loading}>loading....</p>
  )
}
export default loadingState