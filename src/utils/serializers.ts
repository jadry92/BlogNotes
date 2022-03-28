
interface progressReturn {
  color : string;
  nLevel : number;
  wLevel: string;
  progress: number;
}

function progressSerializer(progress: number): progressReturn {

  let respond = {
    color : '',
    nLevel : 0,
    wLevel: '',
    progress: 0,
  }

  if (progress >= 0  && progress < 25) {
    respond.color = 'bg-secondary'
    respond.nLevel = 0
    respond.wLevel = 'raw'
    respond.progress = progress
  } else if (progress >= 25  && progress < 50) {
    respond.color = 'bg-danger'
    respond.nLevel = 25
    respond.wLevel = 'basic'
    respond.progress = progress
  } else if (progress >= 50  && progress < 75) {
    respond.color = 'bg-warning'
    respond.nLevel = 50
    respond.wLevel = 'middle'
    respond.progress = progress
  } else if (progress >= 75  && progress < 100) {
    respond.color = 'bg-primary'
    respond.nLevel = 75
    respond.wLevel = 'advance'
    respond.progress = progress
  } else if (progress === 100) {
    respond.color = 'bg-success'
    respond.nLevel = 100
    respond.wLevel = 'done'
    respond.progress = progress
  }


  return respond
}

export { progressSerializer }