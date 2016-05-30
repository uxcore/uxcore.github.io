import Actions from './actions';
import { saveAs, saveTextAs } from '../js/fileSaver';

function _varsAdapter(vars){
    let submitData = {};
    Object.keys(vars).forEach((key) => {
        submitData[`@${key}`] = vars[key];
    });
    return submitData;
}

let Store = Reflux.createStore({
    listenables: [Actions],
    data: {
        css: ''
    },
    onBuild(data) {
        console.log('build css with ', data);
        let submitData = _varsAdapter(data);
        $.ajax({
            type: 'post',
            url: 'http://eternalsky.me:8082/api/css/compile',
            data: {
                name: 'uxcore-kuma',
                variables: submitData
            }
        }).done((res) => {
            if (!res.hasError) {
                Actions.build.completed(res.content.css);
            } else {
                Actions.build.failed();
            }
        });
    },
    onBuildCompleted(css) {
        this.data.css = css;
        this.triggerAsync(this.data);
    },
    onBuildFailed() {
        console.log('onBuildFailed');
    },
    updateComponent() {
        this.trigger(this.data);
    },
    getInitialState() {
        return this.data;
    },
    download(type, vars) {
        let submitData = _varsAdapter(vars);
        let downloadUrl, filename;
        switch(type) {
            case 'cssfile':
                downloadUrl = 'http://eternalsky.me:8082/api/css/download'
                filename = 'uxcore-kuma.css';
                break;
            case 'variables':
                downloadUrl = 'http://eternalsky.me:8082/api/css/getVars';
                filename = 'theme.less';
            default:
                break;
        }
        $.ajax({
            type: 'post',
            url: downloadUrl,
            data: {
                name: 'uxcore-kuma',
                variables: submitData
            }
        }).done(function(data){
            
            saveTextAs(data, filename);
        });
    }
});

export default Store;