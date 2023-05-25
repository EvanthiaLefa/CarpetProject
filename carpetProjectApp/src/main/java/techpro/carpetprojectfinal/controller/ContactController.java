package techpro.carpetprojectfinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import techpro.carpetprojectfinal.dao.ContactDaoImpl;
import techpro.carpetprojectfinal.entity.Contact;
import techpro.carpetprojectfinal.mapper.ContactDTO;
import techpro.carpetprojectfinal.mapper.DTOMapping;
import techpro.carpetprojectfinal.service.ContactServiceImpl;


import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class ContactController {

    private ContactServiceImpl contactServiceImpl;
    private DTOMapping dtoMapping;
    private ContactDaoImpl contactDaoImpl;

    @Autowired
    public ContactController(ContactServiceImpl contactServiceImpl, DTOMapping dtoMapping, ContactDaoImpl contactDaoImpl) {
        this.contactDaoImpl = contactDaoImpl;
        this.contactServiceImpl = contactServiceImpl;
        this.dtoMapping = dtoMapping;
    }

    // Get All Contacts
    @GetMapping("/contacts")
    public List<ContactDTO> getAll() {
        return contactDaoImpl.findAll().stream().map(dtoMapping::toContactDTO).collect(Collectors.toList());
    }

    //Get a single Contact by ID
    @GetMapping("/contacts/{contactId}")
    public ContactDTO getContact(@PathVariable long contactId) {
        return dtoMapping.toContactDTO(contactServiceImpl.findById(contactId));
    }

    //Add new contact
    @PostMapping("/contacts")
    public ContactDTO addContact(@RequestBody ContactDTO theContactDTO) {
        Contact entity = dtoMapping.toContact(theContactDTO);
        Contact savedContact = contactServiceImpl.save(entity);

        return dtoMapping.toContactDTO(savedContact);
    }


    //Update
    @PutMapping("/contacts")
    public ContactDTO updateContact(@RequestBody ContactDTO contactDto){
        Contact dbContact=contactServiceImpl.findById(contactDto.getId());
        dtoMapping.updateEntity(dbContact,contactDto);
        return  dtoMapping.toContactDTO(contactServiceImpl.save(dbContact));
    }

    @DeleteMapping("/contacts/{contactId}")
    public void deleteContact(@PathVariable int contactId) {
        Contact tempContact = contactServiceImpl.findById(contactId);
        if (tempContact == null) {
            throw new RuntimeException("Contact not found");
        }
        contactServiceImpl.deleteBy(contactId);
        System.out.println("Delete contact " + contactId);

    }


}


