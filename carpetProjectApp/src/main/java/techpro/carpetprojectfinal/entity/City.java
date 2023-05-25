package techpro.carpetprojectfinal.entity;

import jakarta.persistence.*;

//This is city table
@Entity
@Table(name="city")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name="id")
    private Long id;

    @Column(name="city")
    private String city;
//
//
//    @OneToOne()
//    @JoinColumn(name="person_id")
//    private Contact contact;

    public City(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
//
//    public Contact getContact() {
//        return contact;
//    }
//
//    public void setContact(Contact contact) {
//        this.contact = contact;
//    }
}
