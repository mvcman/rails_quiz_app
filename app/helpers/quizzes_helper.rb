module QuizzesHelper
    def link_to_add_question(name, f, association)
        new_object = f.object.send(association).klass.new
        id = new_object.object_id
        fields = f.fields_for(association, new_object, child_index: id) do |builder|
            render(association.to_s + "_fields", f: builder)
        end
        link_to(name, '#', class: "add_question font-inter text-sm text-day-main dark:text-white underline", data: {id: id, controller: "templates", fields: fields.gsub("\n", "")})
    end
end
