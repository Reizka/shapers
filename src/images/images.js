import main from './demo.svg'; 
import food from './demo.svg'; 
import mobility from './demo.svg'; 
import consumerism from './demo.svg'; 
import wasteAndReacycle from './demo.svg'; 
import about from './demo.svg'; 
import dummy from './demo.svg'; 


const getImage = topic => {

	switch(topic){
	case 'Main':
		return main;
	case 'Food':
		return food;
	case 'Mobility':
		return mobility;
	case 'Consumerism':
		return consumerism;
	case 'Waste & Recycling':
		return wasteAndReacycle;
	case 'About':
		return about;
	default:
		return dummy;
         
	}
};

export default getImage;