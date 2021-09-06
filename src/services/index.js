
// eslint-disable-next-line no-unused-vars
import {BoardService, MockBoardService} from "@/services/BoardService";

const API_URL_HOST = process.env.VUE_APP_API_HOST;


const providedServices = {
    boardService: new MockBoardService(API_URL_HOST),
}

export default providedServices;
