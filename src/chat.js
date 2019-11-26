import {ApiAiClient} from 'api-ai-javascript';
import {applyMiddleware,createStore} from 'redux';


const accessToken='79684d5c091b447fae367e3d10400919';
const client= new ApiAiClient({accessToken})

const ON_MESSAGE ='ON_MESSAGE';

export const sendMessage =(text,sender) => ({
	type: ON_MESSAGE,
	payload: {text,sender}
	
});

const messageMiddleware =() =>next =>action=>{
	next(action);
	if(action.type===ON_MESSAGE)
	{
		const { text } =action.payload;
		
		if(text==="")
		{

		client.textRequest('nothing')
			.then(onSuccess ).catch((error) => {console.log(error);})
		}else
		{
			client.textRequest(text)
			.then(onSuccess ).catch((error) => {console.log(error);})
		}

			function onSuccess(response) {
				const {result:{fulfillment }}= response;
				next(sendMessage(fulfillment.speech, 'bot'));
			}

	}

};
const initState =[{ text: 'hey' }];

const messageReducer =(state = [] ,action) =>{
	switch(action.type){
		case ON_MESSAGE:
			return [...state, action.payload];
		default:
			return state;
	}

};
export const store= createStore (messageReducer, applyMiddleware(messageMiddleware));