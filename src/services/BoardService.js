import axios from '@/utils/AxiosInterceptors'

export class BoardService {

    constructor(host) {
        this.host = host;
    }

    getBoardList( boardCode, params ){
        console.log( `getBoardList::${boardCode}`, params );

        return axios
            .get(`${this.host}/api/board/${boardCode}`, {params:params})
            .then(response => {
                // console.log('>>== response', response);
                return response.data.response;
            })
            .catch((e) => { console.log(e); });
    }

}


//== mockup
export class MockBoardService {

    constructor(host) {
        this.host = host;
    }

    getBoardList( boardCode, params ){
        console.log( `getBoardList::${boardCode}`, params );

        return Promise.resolve([{'name': 'aaa'}]);
    }


}
