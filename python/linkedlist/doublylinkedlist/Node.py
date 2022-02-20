# class to represent linkedlist node 
class Node:
    # Constructor to initialize node attributes
    # data argument represents node data/value
    # prev represents the pointer to previous node
    # next represents the pointer to next node
    def __init__(self,data,prev = None,next = None) -> None:
        self.data = data
        self.prev = prev
        self.next = next
     
    # Compares node data
    # returns true when the node data matches the data parameter   
    def is_equal (self,data) -> bool:
        return self.data == data        
    
    