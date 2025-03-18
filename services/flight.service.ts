import { NlpManager, NlpResult } from "node-nlp";  

class FlightService {     
    private manager: NlpManager;  

    constructor() {         
        this.manager = new NlpManager({ languages: ['vi'] });          
        
        this.manager.addDocument('vi', 'Từ Hồ Chí Minh đến Hà Nội', 'flight.destination');         
        this.manager.addDocument('vi', 'Bay đến Đà Nẵng', 'flight.destination');         
        this.manager.addDocument('vi', 'Bay đến Nha Trang', 'flight.destination');          
        
        this.manager.addNamedEntityText('destination', 'Hà Nội', ['vi'], ['Hà Nội', 'Hanoi']);         
        this.manager.addNamedEntityText('destination', 'Đà Nẵng', ['vi'], ['Đà Nẵng', 'Danang']);         
        this.manager.addNamedEntityText('destination', 'Nha Trang', ['vi'], ['Nha Trang']);  

        this.manager.addAnswer('vi', 'flight.destination', 'Điểm đến của bạn là {{destination}}');
    }     

    async train() {         
        await this.manager.train();     
    }     

    async getDestination(text: string): Promise<NlpResult | null> {         
        const res: NlpResult = await this.manager.process('vi', text);         
        return res.intent === 'flight.destination' && res.entities ? res : null;     
    } 
}  

export default new FlightService();
