using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class ControllerTEst : MonoBehaviour
{
    OVRInput.Controller  m_Controller;
    public TMP_Text op1,op2,op3;
    public TMP_Text optionSelected;

    public Transform pto1;
    public Transform pto2;

    List<Vector3> ptoPositions;

    public LineRenderer laser;
    RaycastHit hit;

void Start()
{
  optionSelected = null;
}
    // Update is called once per frame
    void Update()
    {
        m_Controller = OVRInput.GetActiveController();
        ptoPositions = new List<Vector3>();
        ptoPositions.Add(pto1.position);
        ptoPositions.Add(pto2.position);

        Vector3[] ptsPositions = ptoPositions.ToArray();
        
        laser.SetPositions(ptsPositions);

        Vector3 origin = pto1.position;
        

        if (Physics.Raycast(origin, transform.TransformDirection(Vector3.forward), out hit, Mathf.Infinity))
        {
            Debug.DrawRay(origin, transform.TransformDirection(Vector3.forward) * hit.distance, Color.yellow);
            
            if(optionSelected == null)
            {
                optionSelected = hit.collider.GetComponent<TMP_Text>();
                optionSelected.color = Color.yellow;
            }
        }
        else
        {
            Debug.DrawRay(origin, transform.TransformDirection(Vector3.forward) * 1000, Color.white);
            Debug.Log("Did not Hit");

            if(optionSelected !=null)
            {
                optionSelected.color = Color.white;
                optionSelected = null;
            }

        }
        
        bool click = OVRInput.GetUp(OVRInput.Button.PrimaryIndexTrigger,m_Controller);
        
        // if(click && optionSelected.name == "op-b")
        // {
        //     op1.color = Color.red;
        //     op2.color = Color.yellow;
        //     op3.color = Color.red;
        // }
        // else
        // if(click && optionSelected.name != "op-b")
        // {
        //     op1.text = "";
        //     op2.color = Color.yellow;
        //     op3.text = "";
        // }
        
       

    }
}
