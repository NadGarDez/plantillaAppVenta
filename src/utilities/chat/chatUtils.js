import config from '../../../config';
import { selectToken } from '../../reduxFiles/sessionSlice';
import store from '../../reduxFiles/store';
import fm from '../fetchManager';

const getInformationSeller = async (id)=>{
    const token = selectToken(store.getState());
    const fetchUtil = new fm(config.host)
    const result = await fetchUtil.getJson(`/sellerInformation/${id}`,token);
    return result;   
}

export {getInformationSeller}