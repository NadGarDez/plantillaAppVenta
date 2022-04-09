import config from '../../../config';
import { selectToken } from '../../reduxFiles/sessionSlice';
import store from '../../reduxFiles/store';
import fm from '../fetchManager';

const getInformationPartner = async (id)=>{
    const token = selectToken(store.getState());
    const fetchUtil = new fm(config.host)
    const result = await fetchUtil.getJson(`/partnerInformation/${id}`,token);
    return result;   
}

const getInformationPartners = async (partners)=>{
    const token = selectToken(store.getState());
    const fetchUtil = new fm(config.host+'/partersInformation')
    const body = {partners};
    const result = await fetchUtil.postJson(body,token);
    return result;   
}


const getAllMessages = async (limitId=null)=>{
    const token = selectToken(store.getState());
    const fetchUtil = new fm(config.host+'/getMessages');
    const body = limitId === null ? undefined : {limitId}
    const result = await fetchUtil.postJson(body,token)
    return result;
}

export {getInformationPartner, getAllMessages, getInformationPartners}