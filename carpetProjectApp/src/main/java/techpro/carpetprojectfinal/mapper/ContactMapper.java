package techpro.carpetprojectfinal.mapper;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import techpro.carpetprojectfinal.entity.Contact;

@Mapper(componentModel = "spring")
public interface ContactMapper {

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateContactFromDTO(ContactDTO contactDTO, @MappingTarget Contact contact);

}
