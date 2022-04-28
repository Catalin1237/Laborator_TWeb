import { getParent, getParentOfType, types } from 'mobx-state-tree';
import { LoginStore } from './LoginStore';

export const LoginModel = types.model('LoginModel', {
    id: types.identifier,
    user: '',
    passwd: ''
})