package techpro.carpetprojectfinal.service;

import org.springframework.stereotype.Service;
import techpro.carpetprojectfinal.entity.Contact;

import java.util.List;

@Service
public interface ContactService {

    List<Contact> findAll();
    Contact findById(long theId);
    Contact save(Contact contact);
    void deleteBy(long theId);

}
