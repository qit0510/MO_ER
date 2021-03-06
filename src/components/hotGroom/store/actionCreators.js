import {actionType} from './index';
import axios from 'axios';

const setInitGroomInfo = (data) => ({
  type: actionType.GET_HOT_GROOM_LIST,
  data: data
});


export const initGroomInfo = () => {
  return (dispatch) => {
    axios.get('/api/hotArticle').then((res) => {
      dispatch(setInitGroomInfo(res.data));
    }).catch((errors) => {
      console.log(errors);
    });
  };
};
