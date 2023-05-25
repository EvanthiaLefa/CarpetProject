package techpro.carpetprojectfinal.mapper;

import org.springframework.stereotype.Service;
import techpro.carpetprojectfinal.entity.City;
import techpro.carpetprojectfinal.entity.Contact;
import techpro.carpetprojectfinal.entity.State;

//This is a service to map data from database objects to DTO objects which talk to frontend
@Service
public class DTOMapping {

    public ContactDTO toContactDTO(Contact contact){
        ContactDTO contactDTO=new ContactDTO();
//        contactDTO.setFullName(contact.getFirstName() + " " + contact.getLastName());
        contactDTO.setId((int)contact.getPersonId());
        contactDTO.setFirstName(contact.getFirstName());
        contactDTO.setLastName(contact.getLastName());
        contactDTO.setPhoneNumber(contact.getPhoneNumber());
        contactDTO.setEmail(contact.getEmail());
        contactDTO.setStreetAddress(contact.getAddress());
        contactDTO.setPostalCode(contact.getPostalCode());
        contactDTO.setCity(toCityDTO(contact.getCity()));
        contactDTO.setState(toStateDTO(contact.getState()));
        return contactDTO;
    }

    public CityDTO toCityDTO(City city){
        CityDTO cityDTO=new CityDTO();
        cityDTO.setId(city.getId());
        cityDTO.setCity(city.getCity());
        return cityDTO;
    }

    public StateDTO toStateDTO(State state){
        StateDTO stateDTO=new StateDTO();
        stateDTO.setId(state.getId());
        stateDTO.setState(state.getState());
        return stateDTO;
    }

    public Contact toContact(ContactDTO contactDTO){
        Contact contact=new Contact();
        contact.setFirstName(contactDTO.getFirstName());
        contact.setLastName(contactDTO.getLastName());
        contact.setPhoneNumber(contactDTO.getPhoneNumber());
        contact.setEmail(contactDTO.getEmail());
        contact.setAddress(contactDTO.getStreetAddress());
        contact.setPostalCode(contactDTO.getPostalCode());
        contact.setCity(toCity(contactDTO.getCity()));
        contact.setState(toState(contactDTO.getState()));
        return contact;
    }

    public City toCity(CityDTO cityDTO){
        City city=new City();
        city.setCity(cityDTO.getCity());
        return city;
    }

    public State toState(StateDTO stateDTO){
        State state=new State();
        state.setState(stateDTO.getState());
        return state;
    }

    public void updateEntity(Contact entity, ContactDTO dto) {
        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setPhoneNumber(dto.getPhoneNumber());
        entity.setEmail(dto.getEmail());
        entity.setAddress(dto.getStreetAddress());
        entity.setPostalCode(dto.getPostalCode());
        entity.setCity(toCity(dto.getCity()));
        entity.setState(toState(dto.getState()));
    }
}
