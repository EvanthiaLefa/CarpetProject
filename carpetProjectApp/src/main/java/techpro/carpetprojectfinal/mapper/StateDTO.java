package techpro.carpetprojectfinal.mapper;

//This is a DTO object for State to transfer data to frontend
public class StateDTO {

    private long id;
    private String state;

    public StateDTO(){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
